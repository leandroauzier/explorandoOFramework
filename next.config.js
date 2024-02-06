module.exports = {
    trailingSlash: true,
    async redirects(){
        return [
            {
                source: '/perguntas',   // Acessado
                destination: '/faq',    // redirecionado
                permanent: true,
            },
        ]
    },
}