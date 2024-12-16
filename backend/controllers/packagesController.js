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
    try {
        const { id, title, description, price, availableDates } = req.body;
        const image = req.file? req.file.path : null;
        const updatedPackage = {};

        if (title) updatedPackage.title = title;
        if (description) updatedPackage.description = description;
        if (price) updatedPackage.price = price;
        if (availableDates) updatedPackage.availableDates = availableDates;
        if (image) updatedPackage.image = image; // Add image only if a new file is uploaded

        // Check if there are any fields to update
        if (Object.keys(updatedPackage).length === 0) {
            return res.status(400).json({ message: "No fields provided for update" });
        }

        // Find and update the package
        const savedPackage = await Package.findByIdAndUpdate(id, updatedPackage, { new: true });
        res.json(savedPackage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

//Delete Package

const deletePackages = async (req, res) => {
    try {
        const { id } = req.body;
        await Package.findByIdAndDelete(id);
        res.json({ message: "Package deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export default  { getPackages, postPackages, updatePackages, deletePackages };