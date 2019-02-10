import device from 'current-device';

if(device.mobile()) {
} else if(device.tablet()) {
  $('#viewport').attr('content', 'width=1200, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
} else if(device.desktop()) {
  $('#viewport').attr('content', 'width=1200, minimum-scale=0.3, maximum-scale=3, user-scalable=yes, target-densitydpi=device-dpi');
}
