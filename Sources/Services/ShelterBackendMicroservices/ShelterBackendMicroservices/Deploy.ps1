$Version = 'pkg\Release'
. Scripts\Deploy-FabricApplication.ps1 -ApplicationPackagePath $Version -PublishProfileFile "PublishProfiles\Local.5Node.xml" -OverwriteBehavior "Always"

pause