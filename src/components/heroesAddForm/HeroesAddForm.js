import { Controller, FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup'
import {useHttp} from '../../hooks/http.hook';;


// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {


    const methods = useForm ({
        // mode: "onBlur",
        // defaultValues: {
        //     name: '',
        //     text: '',
        //     element: ''
        // },
        // validationSchema: Yup.object({
        //     name: Yup.string()
        //             .min(2, 'Минимум 2 символа!')
        //             .required('Обязательное поле!'),
        //     text: Yup.string()
        //             .min(10, 'Минимум 10 символа!')
        //             .required('Обязательное поле!'),
        //     element: Yup.string()
        //             .required('Обязательно выберете!')
        // }),
        // onSubmit: values => console.log(JSON.stringify(values, null, 2))
    });

    const {request} = useHttp();

    const { control, handleSubmit, register } = methods;

    const onSubmit = (data) => {
        request("/api/zamer/addHero", 'POST', JSON.stringify({
            name: data.name,
            description: data.text,
            element: data.element
        }))
    }

    return (
        <form className="border p-4 shadow-lg rounded"
        onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    control={control}
                    type="text"
                    className="form-control"
                    name='name'
                    placeholder="Как меня зовут?"
                    {...register("name", { 
                        required: 'Обязательное поле!',
                        minLength: {
                            value: 2,
                            message: 'Минимум 2 символа!'
                        }
                    })} 
                    />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    className="form-control" 
                    id="text" 
                    control={control}
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    {...register("text", { 
                        required: 'Обязательное поле!',
                        minLength: {
                            value: 10,
                            message: 'Минимум 10 символа!'
                        }
                    })} 
                    />
            </div>
            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    className="form-select" 
                    id="element" 
                    control={control}
                    {...register("element", { 
                        required: 'Обязательное поле!',
                    })} 
                    >
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>
            {/* {formik.errors.element && formik.touched.element && <div>{formik.errors.element}</div>} */}
            <input type="submit" className="btn btn-primary" value="Создать" />
        </form>
    )
}

export default HeroesAddForm;