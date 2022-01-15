//
//  LandmarkAnnotation.swift
//  Rutgers Eats
//
//  Created by Akshith Dandemraju on 1/15/22.
//

import MapKit
import UIKit


final class LandmarkAnnotation: NSObject, MKAnnotation {
    let title: String?
    let coordinate: CLLocationCoordinate2D

    init(landmark: Landmark) {
        self.title = landmark.name
        self.coordinate = landmark.coordinate
    }
}
