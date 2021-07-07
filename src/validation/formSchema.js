import * as yup from 'yup'

export default yup.object().shape({
    name: yup
            .string()
            .min(2, 'Your name must be at least 2 characters long')
            .required('You must enter a name.'),
    size: yup
            .string()
            .oneOf(['small', 'medium', 'large']),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.string()
})