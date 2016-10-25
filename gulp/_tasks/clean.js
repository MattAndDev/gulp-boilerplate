
import config from '../config'
import del from 'del'


function clean (done) {
  return del(config.dest, { dot: true, force: true }, done)
}
clean.displayName = 'clean'
export default clean
