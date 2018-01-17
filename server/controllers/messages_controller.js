let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        id++
        let newMessage = {
            id: id,
            text: req.body.text,
            time: req.body.time
        }
        messages.push(newMessage)
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        for (let i = 0; i < messages.length; i++) {
            if (messages[i].id === parseInt(req.params.id)) {
                messages[i] = req.body
            }
        }
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        messages = messages.filter(function(message) {
            return message.id !== parseInt(req.params.id)
        })
        res.status(200).send(messages);
    }
}