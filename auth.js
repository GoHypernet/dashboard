export default {
  metrics: {
    url: process.env.METRICS_URL,
  },
  vector: {
    autoRebalanceUrl: process.env.AUTO_REBALANCE_URL,
    adminToken: process.env.ADMIN_TOKEN,
  },
  bitbucket: {
    username: process.env.BITBUCKET_USER,
    password: process.env.BITBUCKET_PASS
  },
  elasticsearch: {
    username: process.env.ELASTICSEARCH_USER,
    password: process.env.ELASTICSEARCH_PASS
  },
  jenkins: {
    username: process.env.JENKINS_USER,
    password: process.env.JENKINS_PASS
  },
  jira: {
    username: process.env.JIRA_USER,
    password: process.env.JIRA_PASS
  },
  sonarqube: {
    username: process.env.SONARQUBE_USER,
    password: process.env.SONARQUBE_PASS
  },
  github: {
    username: process.env.GITHUB_USER,
    password: process.env.GITHUB_PASS
  }
}
