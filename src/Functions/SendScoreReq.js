import axiosCSRF from '../Axios/NewAxios';
import Swal from 'sweetalert2';

export const SendScore = async (data, score) => {
    try {
        await axiosCSRF.post('/score', {
            nom: data.nom,
            prenom: data.prenom,
            etablisement: data.etablisement,
            score: score
        });
    } catch (error) {
        console.error('Error sending score:', error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "S'il vous plaît réessayez plus tard.",

        });
    }
};
