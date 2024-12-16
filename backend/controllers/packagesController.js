import Package from '../models/packageModel.js';

//Fetch Packages
const getPackages = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            const packages = await Package.find({});
            res.json(packages);
        } else {
            const singlePackage = await Package.findById(id);
            res.json(singlePackage);
        }
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//Add new Package

const postPackages = async (req, res) => {
    try {
        const { title, description, price, availableDates } = req.body;
        const image = req.file.path;
        const newPackage = {
            title,
            description,
            price,
            availableDates,
            image,
        };
        const savedPackage = await Package.create(newPackage);
        res.json(savedPackage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//Update Package

const updatePackages = async (req, res) => {
}

//Delete Package

const deletePackages = async (req, res) => {
}

export default  { getPackages, postPackages, updatePackages, deletePackages };