exports.index = (req, res) => {
    res.render('home', {
        title: 'Fundación Solidaria UNA NUEVA HISTORIA'
    });
};

exports.nosotros = (req, res) => {
    res.render('nosotros', {
        title: 'Nosotros - Fundación Solidaria'
    });
};