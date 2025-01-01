const crypto = require('crypto');

export default function handler(req, res) {
    const secretKey = process.env.SECRET_KEY; // Obtém a chave secreta da variável de ambiente
    const { visitorId } = req.query;

    if (!visitorId) {
        return res.status(400).json({ error: "Visitor ID is required" });
    }

    const hash = crypto.createHmac('sha256', secretKey)
        .update(visitorId)
        .digest('hex');

    res.status(200).json({ hash });
}
