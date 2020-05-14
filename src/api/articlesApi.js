import client from './apiClient';

const url =
    'https://storage.googleapis.com/aller-structure-task/test_data.json';

const getArticles = () => client.get(url);

export default { getArticles };
