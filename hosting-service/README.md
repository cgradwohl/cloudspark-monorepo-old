# Static Site Hosting Service

The domain for the static site (i.e. mystaticsite.com) must be configured as a hosted zone in Route53 prior to deploying this example. For instructions on configuring Route53 as the DNS service for your domain, see the Route53 documentation: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring.html

Deploy the stack
`cdk deploy -c accountId=123456789 -c domain=mystaticsite.com -c subdomain=www`
