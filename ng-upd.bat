CALL git commit -am "pre update commit"
CALL ng update @angular/core --force
CALL git add .
CALL git commit -am "@angular/core update to latest"
CALL ng update @angular/cli --force
CALL git add .
CALL git commit -am "@angular/cli update to latest"
CALL ng update @angular-devkit/architect
CALL git commit -am "@angular-devkit/architect to latest"
CALL npm audit fix
CALL git commit -am "post update commit"
CALL bt.bat