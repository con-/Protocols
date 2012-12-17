//
//  MainViewController.m
//  Protocols
//
//  Created by Jonas Schreiber on 14.12.12.
//  Copyright (c) 2012 codelooksgood. All rights reserved.
//

#import "MainViewController.h"

@interface MainViewController ()

@end

@implementation MainViewController

#pragma mark - View lifecycle
- (void)viewWillAppear:(BOOL)animated
{
	// Set the main view to utilize the entire application frame space of the device.
	// Change this to suit your view's UI footprint needs in your application.
	self.view.frame = [[UIScreen mainScreen] applicationFrame];
	
	[super viewWillAppear:animated];
}

@end
