Hummingbird on Red Hat's OpenShift PaaS
=======================================
This git repository is a Node application to help you get started
with using Hummingbird on Red Hat's OpenShift PaaS.

Hummingbird is a site tracking an analytics application - for more details
see: https://github.com/ramr/openshift-hummingbird-example/blob/master/Hummingbird.README.md


Steps to get Hummingbird running on OpenShift
----------------------------------------

Create an account at http://openshift.redhat.com/

Create a namespace, if you haven't already do so

    rhc domain create -n <yournamespace>

Create a nodejs-0.6 application (you can name it anything via -a)

    rhc app create -a hummingbird -t nodejs-0.6

Add this `github hummingbird` repository

    cd pacman
    git remote add upstream -m master git@github.com:ramr/openshift-hummingbird-example.git
    git pull -s recursive -X theirs upstream master
    
Then push the repo to OpenShift

    git push

That's it, you can now checkout your application at:

    http://hummingbird-$yournamespace.rhcloud.com


