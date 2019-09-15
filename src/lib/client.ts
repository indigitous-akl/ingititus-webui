import gremlin from '../../vendor/gremlin-javascript';

const API_URL = 'ws://10.1.1.70:8182/gremlin';

const traversal = gremlin.process.AnonymousTraversalSource.traversal;
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;

export const valueMap = gremlin.process.statics.valueMap;
export const out = gremlin.process.statics.out;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default () => traversal().withRemote(new DriverRemoteConnection(API_URL) as any);
