# keys for bootstrap

- select boot device: option
- recovery: command + R

# create a USB disk installer

- download dmg file from apple or other url
- open the dmg file
- drag the install app to Applications folder
- plug in a usb disk
- run command:

```shell
sudo /Applications/Install\ macOS\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/Your-USB-Mount-Dir --applicationpath /Applications/Install\ macOS\ Sierra.app --nointeraction

```

> change 'Your-USB-Mount-Dir' to your own directory

