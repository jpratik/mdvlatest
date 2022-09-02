const en = {
    translations: {
        'BaseForm.Username.Label': 'Email',
        'BaseForm.Password.Label': 'Password',
        'BaseForm.Password.Placeholder': 'Your password',
        'BaseForm.Password.VisibilityToggle': 'Toggle password visibility',
        'BaseForm.ForgotPassword.Button': 'Forgot Password?',
        'BaseForm.Submit.Button': 'Log In',
        'ForgotPasswordForm.Instructions':
            'Please enter your email address below. We will send you an email to reset your password.',
        'ForgotPasswordForm.Email.Label': 'Email Address',
        'ForgotPasswordForm.Submit.Button': 'Send',
        'ForgotPasswordForm.Return.Button': 'Go Back',
        'Error.MissingUsernamePassword':
            'Both email and password are required to log in.',
        'Error.InvalideEmailAddress': 'Please enter a valid email address.',
        'Error.EmailAdressIsEmpty': 'Please enter your email address.',
        'Error.IncorrectEmailProvided.part1': 'Please enter a valid email address to log in. If your admin isn\'t on the updated authentication platform, please go to ',
        'Error.IncorrectEmailProvided.part2': ' to update your login experience. ',
        'Success.PasswordResetSent':
            "We've just sent you an email to reset your password.",
        
        'Onair.Password.Reset' : 'Please click on forgot password and follow instructions to change your password.',

        'User.Locked' : 'This Administrator has been locked. For more information, please contact MDV Customer Care.',
        'Password.Reset.Failed' : 'There was an error trying to reset your password. Please try again.',
        'User.emailNotVerified' : 'Your email has not been verified. Please check your email to complete the verification process.',
        'Password.Reset.Success' : 'We\'ve just sent you an email to reset your password.',
        // Auth0 Errors
        request_error:
            'We apologize there is an error with our system. Please try again.',
        access_denied: 'Please try to refresh the page, if the problem still persists contact MDV Customer Care.',
        invalid_user_password:
            'Invalid email and/or password. Please try again.',
        mfa_invalid_code:
            'The multi-factor authentication code is invalid/expired',
        mfa_registration_required:
            'Your administrator has required multi-factor authentication. Please contact your administrator to enroll.',
        mfa_required: 'Multi-factor authentication code is required.',
        too_many_attempts:
            'This login was blocked due to too many invalid login attempts. Please check your email to unblock your login.',
        unauthorized:
            'The user you are attempting to sign in with is blocked. If you feel this is an error, please contact your administrator.',
        'dealer.unauthorized':
            'There is no Partner Portal user associated with this email address.',
        'User.Disabled' :
            'This user has been disabled. For more information, please contact MDV Customer Care.',
        'LoginForm.title' : 'Login to ',
        'LoginForm.SignIn.Button' : 'Log In',
        'LoginForm.ForgotPassword' : 'Forgot your password?',
        'LoginForm.Error.Title' : 'Login was not successful',
        'ForgotPasswordForm.ReturnToLoginButton' : 'Return to Account Login',
        'iam.remote.access.denied.url.expired': 'This session has expired. Please log in to Portal and try again.',
        'iam.remote.access.denied.assignment.expired': 'This session has expired. Please log in to  Portal and try again.',
        'iam.remote.access.denied.invalid.user': 'This session has expired. Please log in to  Portal and try again.',
        'iam.remote.access.setting.disabled': 'This session has expired. Please log in to Portal and try again.',
        'iam.remote.access.denied': 'This session has expired. Please log in to Portal and try again.'
    },
};

export default en;
