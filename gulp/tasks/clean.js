import config from '../config'
import del from 'del'

function clean (done) {
  return del(config.dest, { dot: true, force: true }, done)
}
clean.displayName = 'clean'
clean.description = 'Removes destination folder to build anew'

export default clean
