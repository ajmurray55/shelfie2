// const inventory = [
//   {
//     name: "Jordans",
//     price: 125.99,
//     image_url: "https://m.media-amazon.com/images/I/81-c4I0vcfL._SR500,500_.jpg"
//   }
// ];
module.exports = {
  createInventory: (req, res) => {
    const db = req.app.get("db");
    // const {name, price, image_url} = req.body
    db.create_inventory([
      req.body.name,
      req.body.price,
      req.body.image_url
    ]) 
      .then(inventory => {
        res.status(200).send(inventory);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "uhh ohhh" });
        console.log(err);
      });
  },
  getOne: (req, res) => {
    const db = req.app.get("db");
    db.read_inventory(req.params.id)
      .then(inventory => {
        res.status(200).send(inventory);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "uhh ohhh" });
        console.log(err);
      });
  },
  getInventory: (req, res) => {
    const db = req.app.get("db");
    db.get_inventory()
    .then(inventory => {
    res.status(200).send(inventory);
    })
    .catch(err => {
        res
        .status(500)
        .send({errorMessage: 'uhh ohhh'});
        console.log(err)
    })
  },
//   update: (req, res) => {
//     const db = req.app.get("db");
//     db.update_inventory(
//       req.params.id,
//       req.query.name,
//       req.query.price,
//       req.query.image_url
//     )
//       .then(product => {
//         res.status(200).send(product);
//       })
//       .catch(err => {
//         res.status(500).send({ errorMessage: "uhh ohhh" });
//         console.log(err);
//       });
//   },
//   delete: (req, res) => {
//     const db = req.app.get("db");
//     db.delete_product(req.params.id)
//       .then(product => {
//         res.status(200).send(product);
//       })
//       .catch(err => {
//         res.status(500).send({ errorMessage: "uhh ohhh" });
//         console.log(err);
//       });
//   }
};
