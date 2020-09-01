#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Program:     tle2czml
Created:     Aug 2020
@author:     Ryan Clement (RRCC)
             scisoft@outlook.com

Purpose:     Covert JSON TLE data to CZML
Data Source: CELESTRAK (celestrak.com)
"""


### IMPORTS
import json
import numpy as np
import matplotlib.pyplot as plt


### FUNCTIONS
def getData():
    # Open file with JSON data
    f = open('Data/gp.json', "r")
    # Reading from file
    data = json.load(f)
    # Close file
    f.close()
    # Print available GPS satellites
    print('Avaliable GPS satellites in this data set:')
    for sat in data:
        print(sat['OBJECT_NAME'])
    return data


if __name__ == '__main__':
    ### VARIABLES
    ecc = 0.0          # eccentricity = 0 is a circle

    satDatDic = getData()


    # Build CZML File
    czmlLis = []
    # Create document object
    docDic = {'id':'document'}
    docDic['name'] = 'GPS'
    docDic['version'] = '1.0'
    czmlLis.append(docDic)
    # Create satellite objects
    for sat in satDatDic:
        dic = {}
        id = sat['OBJECT_NAME']
        id = id.split()
        dic['id'] = id[1]
        czmlLis.append(dic)



    print(json.dumps(czmlLis,indent=3))

