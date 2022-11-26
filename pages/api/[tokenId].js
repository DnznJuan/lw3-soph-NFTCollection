export default function handler(req, res) {
    //get token ID from params
    const tokenID = req.query.tokenID
    const image_url = "https://raw.githubusercontent.com/DnznJuan/lw3-soph-nftcollection/87a0fd4cce4518e48ddc950da35e74e8eacc3a41/public/cryptodevs/"
    // SEND METADATA W/OPENSEA/STANDARDS
    res.status(200).json ({
        name: "Crypto Dev #" + tokenID,
        description: "Crypto Dev is a collection of developers in crypto",
        image: image_url + tokenID + ".svg",
    })
}