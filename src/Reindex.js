import Reindex from 'reindex-js';
const reindex = new Reindex(process.env.REINDEX_URL);
console.log(reindex)
export default reindex;
