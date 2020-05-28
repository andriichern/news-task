import { proxy } from 'comlink';

export default async function (remoteStore) {
  const subscribers = new Set();

  let latestState = await remoteStore.getState();
  remoteStore.subscribe(
    proxy(async () => {
      latestState = await remoteStore.getState();
      subscribers.forEach(f => f());
    })
  );
  return {
    dispatch: action => remoteStore.dispatch(action),
    getState: () => latestState,
    subscribe: listener => {
      subscribers.add(listener);
      return () => subscribers.delete(listener);
    },
    replaceReducer: () => {
      throw new Error('Can’t transfer a function');
    },
  };
}
