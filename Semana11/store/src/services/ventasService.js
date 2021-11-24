import axios from "axios";

const URL = `${process.env.REACT_APP_API}ventas`;

const guardarVenta = async (nuevaVenta) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        const { data } = await axios(URL, nuevaVenta, { headers });
        return data;
    } catch (error) {
        throw error;
    }
};

export { guardarVenta };
