module.exports = config = {
  "name" : "Hummingbird",

  "tracking_port" : 18000,

  "dashboard_address" : process.env.OPENSHIFT_NODEJS_IP,
  "dashboard_port" : 8080,

  "mongo_host" : process.env.OPENSHIFT_MONGODB_IP,
  "mongo_port" : 27017,

  "udp_address" : process.env.OPENSHIFT_NODEJS_IP,
  "udp_port" : 18000,

  "enable_dashboard" : true,

  /*  "demo_mode": true,  */
  "demo_mode": false,

  "capistrano" : {
    "repository" :       "git://github.com/mnutt/hummingbird.git",
    "hummingbird_host" : "hummingbird.your-host.com"
  }
}
