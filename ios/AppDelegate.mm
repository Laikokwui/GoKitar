
#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <RNGestureHandler.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // ...existing code...
  [RNGestureHandlerModule.sharedModule blockJSThreadDuringExecution:NO];
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
// ...existing code...
@end