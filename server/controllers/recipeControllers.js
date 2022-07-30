
/**
 * GET /
 * HomePage controller
 */

exports.homepage = async(req, res) =>{
    res.render('index', {title: 'Cooking App, made with Node'});
}