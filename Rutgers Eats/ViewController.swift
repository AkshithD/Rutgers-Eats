//
//  ViewController.swift
//  Rutgers Eats
//
//  Created by Akshith Dandemraju on 1/11/22.
//

import UIKit
import SwiftUI

class ViewController: UIViewController {

    
    
    
    override func viewDidLoad() {
        
        super.viewDidLoad()
       
    
        
     
                   
        }
    
    @IBAction func BtnURL(_ sender: UIButton) {
        UIApplication.shared.open(URL(string: "http://food.rutgers.edu/places-to-eat/")! as URL,
            options: [:],
        completionHandler: nil)
    }
    
        }
            
    

    


