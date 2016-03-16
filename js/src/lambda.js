module.exports = {
  newLambda: (eval, args, body) => {
    return {
      applyMe: (env, params) => {
        const envExtensions = args.map((arg, i) => [arg, params[i]]);

        return eval(envExtensions.concat(env), body);
      }
    }
  }
};
