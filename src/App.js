import React , {useState} from "react";

const AuthForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        email: '',
        phoneNumber: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (
        <div>
            <h2>Форма Регистрации</h2>
            <form>
                <label>
                    ФИО:
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Возраст:
                    <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Электронная почта:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Номер телефона:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </label>
            </form>

            <div>
                <h2>Данные в режиме REAL-TIME:</h2>
                <p>ФИО: {formData.fullName}</p>
                <p>Возраст: {formData.age}</p>
                <p>Электронная почта: {formData.email}</p>
                <p>Номер телефона: {formData.phoneNumber}</p>
            </div>
        </div>
    )
}

export default AuthForm;
