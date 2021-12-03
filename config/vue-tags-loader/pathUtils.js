const Path = require('path');
const fs = require('fs');

let projectPath;
/**
 * 获取当前项目的跟路径,如果当前目录不再npm项目中,则返回`null`值
 * @param path
 * @param dftPath
 * @return {*}
 */
exports.projectPath = (path) => {
  if (projectPath !== undefined) {
    return projectPath;
  }
  const dirPath = Path.dirname(path);
  if (dirPath === path) {
    projectPath = null;
    return projectPath;
  }
  projectPath = fs.existsSync(Path.join(path, 'package.json')) ? path : exports.projectPath(dirPath);
  return projectPath;
};

/**
 * 工作目录配置属性名.
 * 用于配置工作目录,如process[pathUtils.WORKSPACE] = 'path/to/workspace'
 */
exports.WORKSPACE = Symbol('workspace');

/**
 * 将根据工作目录的相对路径转为绝对路径。
 * 类似path.resolve, 只不过path.resolve相对于当前命令所在目录, 而该函数相对于命令执行目录最近的npm项目的根路径。
 * 可以通过设置`process[PathUtl.WORKSPACE]`设置工作目录，默认值为执行命令所在的npm项目的根目录。
 * 如果当前项目不在一个npm项目中,返回null.
 * 该函数跟path.resolve和require.resolve返回类似的结果。
 * @param path {String} 目录路径, path中目录分割符请使用`/`
 * @return {String|null}
 */
exports.resolve = (path) => {
  const workspace = process[exports.WORKSPACE] ? exports.nativePath(process[exports.WORKSPACE])
    : exports.projectPath(process.cwd());
  if (workspace) {
    return Path.join(workspace, ...path.split('/'));
  }
  return null;
};

/**
 * 将路径转为posix路径形式,
 * @param path {String} 目录路径
 * @returns 返回posix路径
 */
exports.posixPath = (path) => {
  if (!path) {
    return null;
  }
  return path.replace(/\\/ig, '/');
};

/**
 * 因为代码中都是使用posix的表现形式展示路径,但这在window系统中,
 *  传递给fs模块的一些函数不兼容,需要转换为真实路径
 * @param path {String} 目录路径, path中目录分割符请使用`/`
 */
exports.nativePath = (path) => {
  if (!path) {
    return null;
  }
  if (Path.seq === '/') {
    return exports.posixPath(path);
  }
  return exports.win32Path(path);
};
