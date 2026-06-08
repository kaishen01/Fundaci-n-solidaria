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

/*seccion de proyectos*/

exports.alivio = (req, res) => {
    res.render('proyectos/alivio', {
        title: 'Alivio y Esperanza'
    });
};

exports.vejez = (req, res) => {
    res.render('proyectos/vejez', {
        title: 'Dignidad en la Vejez'
    });
};

exports.hogar = (req, res) => {
    res.render('proyectos/hogar', {
        title: 'Puentes hacia el Hogar'
    });
};

exports.restauracion = (req, res) => {
    res.render('proyectos/restauracion', {
        title: 'Restauración de Vidas'
    });
};
/*------------------------*/


exports.noticias = (req, res) => {
    res.render('noticias', {
        title: 'Noticias - Fundación Solidaria'
    });
};

exports.contacto = (req, res) => {
    res.render('contacto', {
        title: 'Contacto - Fundación Solidaria'
    });
};