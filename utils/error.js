const error = {
    getError: (err) =>
        err.response && err.response.data && err.response.data.message
            ? err.response.data.message
            : err.message,

    onError: async (err, req, res, next) => {
        await db.disconnect()
        res.status(500).send({ message: err.toString() })
    },
}
export default error
