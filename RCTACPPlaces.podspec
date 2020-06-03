require "json"
package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "RCTACPPlaces"
  s.version      = package["version"]
  s.summary      = "Places library for Adobe Experience Cloud SDK. Written and Supported by Adobe."
  s.author       = "Adobe Mobile SDK Team"
  s.homepage     = "https://github.com/adobe/react-native-acpplaces"
  s.license      = "Apache 2.0 License"
  s.platform     = :ios, "10.0"

  s.source       = { :git => "https://github.com/adobe/react-native-acpplaces", :tag => "#{s.version}" }
  s.source_files  = 'ios/src/**/*.{h,m}','ios/libs/**/*.{h,m}'
  s.requires_arc = true

  s.dependency "React"
  s.frameworks = 'UIKit', 'SystemConfiguration', 'WebKit', 'CoreLocation'
  s.vendored_libraries = 'ios/libs/libACPPlaces_iOS.a'

end
