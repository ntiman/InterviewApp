source ~/.bash_profile

json-server --watch cameraAPI.json --port 7071 --nc false --routes routesCamera.json
json-server --watch orgAPI.json --port 7074 --nc false --routes routesOrg.json