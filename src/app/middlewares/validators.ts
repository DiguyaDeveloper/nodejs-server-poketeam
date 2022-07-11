import { celebrate, Joi, Segments } from 'celebrate';

// Method chaining

const validateSignup = celebrate(
  {
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required().max(8),
      nickName: Joi.string().required().min(3)
    })
  },
  {
    abortEarly: false // Show all errors
  }
);

export { validateSignup };
