from django.shortcuts import render
import cv2
from roboflow import Roboflow
from supervision import Detections
import os
from django.http import StreamingHttpResponse

def detect_parking_spaces(request):
    rf = Roboflow(api_key="2yfAVtQCtbGpRbOO6hBm")
    project = rf.workspace().project("parking-detection-mitok")
    model = project.version(2).model

    cap = cv2.VideoCapture(r'D:\vs code files\SpotSync\storefront\contents\newgo.mp4')

    fps = cap.get(cv2.CAP_PROP_FPS)

    frame_interval = 2 * int(fps)  

    counts = {'frame_count': 0}

    car_count = 0

    
    def event_stream():
        while True:
            ret, frame = cap.read()

            if ret == True:
                counts['frame_count'] += 1

                if counts['frame_count'] % frame_interval == 0:

                    cv2.imwrite('temp_frame.jpg', frame)

                   
                    result = model.predict('temp_frame.jpg', confidence=10, overlap=30).json()

                    
                    detections = Detections.from_inference(result)

                    
                    detections1 = detections[detections.class_id == 0]
                    detections4 = detections[detections.class_id == 3]

                    car_count = (len(detections1) + len(detections4))

                    yield f'{(len(detections1) + len(detections4))}\n'
                    
                    os.remove('temp_frame.jpg')
                    print(car_count)

            else:   
                break

            

        
        cap.release()
        
        
    response = StreamingHttpResponse(event_stream(), content_type='text/event-stream')
    response.headers['Cache-Control'] = 'no-cache'
    return response
