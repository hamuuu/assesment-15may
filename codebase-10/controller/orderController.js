const fs = require('fs')
const { body, validationResult } = require('express-validator/check')

exports.orderRule = () => {
    return [
        body('store_id').isNumeric(),
        body('item_menu', 'Item ordered should greater than 1').isArray().not().isEmpty(),
        body('item_menu.*.menu_id').isNumeric(),
        body('item_menu.*.qty').isNumeric(),
        body('customer_info.name').exists(),
        body('customer_info.telp').isNumeric(),
        body('delivery_location.address').exists(),
        body('order_summary.price').isNumeric(),
        body('order_summary.price_original').isNumeric(),
        body('order_summary.delivery').isNumeric(),
        body('order_summary.delivery_original').isNumeric(),
    ]
}

exports.orderFood = (req, res) => {
    // check if total_payment > 1.000.000
    if (req.body.order_summary.price + req.body.order_summary.delivery > 1000000) {
        return res.status(400).json({
            errors: "total payment exceed 1000000",
        })
    }

    // simulate insert to database
    fs.writeFile('./result.json', JSON.stringify(req.body), (err) => {
        if (err) {
            console.log(err);
        }
    });

    return res.status(201).json({
        "message": "success created order"
    })
}

exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(400).json({
        errors: extractedErrors,
    })
}