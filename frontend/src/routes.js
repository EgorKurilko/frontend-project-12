// @ts-check

const apiPath = '/api/v1';

const apiRoutes = {
  signup: () => `${apiPath}/signup`,
  login: () => `${apiPath}/login`,
  channels: () => `${apiPath}/channels`,
  channel: (id) => `${apiPath}/channels/${id}`,
  messages: () => `${apiPath}/messages`,
  message: (id) => `${apiPath}/messages/${id}`,
};

const clientRoutes = {
  main: () => '/',
  login: () => '/login',
  signup: () => '/signup',
  notFound: () => '*',
};

export default {
  api: apiRoutes,
  client: clientRoutes,
};
