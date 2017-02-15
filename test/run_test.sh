#!/bin/bash
docker run -it --privileged --rm --net=host -v /dev/shm:/dev/shm -v $(pwd):/protractor bbqmaster protractor.conf.js