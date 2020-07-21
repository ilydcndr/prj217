import React from 'react';
import { useForm } from 'react-hook-form'
import '../Styling/ContactUs.css'
import createAirtable from '../functions/CreateAirtable';



const ContactUs = () => {

    const {handleSubmit,register, errors, watch, } = useForm()
     
    const onSubmit=data=>{
        createAirtable(data)
    }
   

    return (
        <div className="contactUs" id="BizeUlasın">
            <div className="contactUsDiv">
                <h1 className="contactUsHeader">Lorem ipsum dolor sit amet</h1>
                <p className="contactDescription">Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique</p>
            </div>
            <div className="formDiv">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            name="Name"
                            placeholder="  İsim"
                            ref={register({
                                required: true
                            })}
                        />

                        <input
                            name="Surname"
                            placeholder="  Soyisim"
                            ref={register({
                                required: true
                            })}
                        />
                        {errors.Name && (<li className="errorStyle">Lütfen,isminizi giriniz</li>)}
                        {errors.Surname && (<li className="errorStyle">Lütfen,soyisminizi giriniz</li>)}
                    </div>
                    <div>
                        <input
                            name="BirthDate"
                            placeholder="  Doğum Tarihiniz"
                            ref={register({
                                required: true
                            })}
                        />

                        <input
                            name="School"
                            placeholder="  Eğitim Durumunuz"
                            ref={register({
                                required: true,
                                maxLength: 28,
                            })}
                        />
                        {errors.BirthDate && (<li className="errorStyle">Lütfen doğum tarihinizi giriniz </li>)}
                        {errors.School && (<li className="errorStyle">Lütfen eğitim durumunuzu yazınız.</li>)}
                    </div>
                    <div>
                        <input
                            name="Phone"
                            placeholder="  Telefon"
                            ref={register({
                                required: true,
                                minLength: 9,
                                maxLength: 10
                            })}
                        />

                        <input
                            name="Email"
                            placeholder="  Email"
                            ref={register({
                                required: false,
                                pattern: /^\S+@\S+$/i
                            })}
                        />
                        {errors.Phone && (<li className="errorStyle">Lütfen,telefon numaranızı giriniz</li>)}
                        {errors.pattern && <li className="errorStyle">Lütfen, Email adresinizi doğru girdiğinizden emin olun</li>}
                    </div>

                    <div>
                        <select name="Purpose" ref={register({ required: true })}>
                            <option value="Seçiniz">Beklediğiniz Hizmeti Seçiniz</option>
                            <option value="Kariyer">A</option>
                            <option value="Müşteri">B</option>
                            <option value="Görüş">C</option>
                        </select>
                        {watch('Purpose') === 'Seçiniz' && (<li className="errorStyle">Lütfen seçim yapınız</li>)}

                        {watch('Purpose') === "Görüş" &&
                            <div>
                                <textarea
                                    className="textArea"
                                    name="Suggestion"
                                    placeholder="  Lütfen Kısaca Açıklayınız"
                                    ref={register({
                                        required: true,
                                        maxLength: 250
                                    })}
                                />
                            </div>
                        }
                        {watch('Purpose') === "Kariyer" &&
                            <div>
                                <div>
                                    <label>Mezun Olduğunuz Bölüm &nbsp;</label>
                                    <input
                                        name="Departmant"
                                        ref={register({
                                            required: true,
                                        })}
                                    />
                                    {errors.Departmant && (<li className="errorStyle">Lütfen bu alanı doldurunuz</li>)}
                                </div>
                                <div>
                                    <label>Mezuniyet Yılınız &nbsp;</label>
                                    <input
                                        name="Graduate"
                                        ref={register({
                                            required: true,
                                        })}
                                    />
                                    {errors.Graduate && (<li className="errorStyle">Lütfen bu alanı doldurunuz</li>)}
                                </div>
                                <div>
                                    <label>Uzmanlık Alanınız &nbsp;</label>
                                    <input
                                        name="Speciality"
                                        ref={register({
                                            required: true,

                                        })}
                                    />
                                    {errors.Speciality && (<li className="errorStyle">Lütfen bu alanı doldurunuz</li>)}
                                </div>
                                <div>
                                    <select name="Experience"
                                        ref={register({
                                            required: true,
                                        })}>
                                        <option value="Seçiniz">Uzmanlık Alanınızda İş Deneyiminizi Seçiniz</option>
                                        <option value="0-6 ay">0-6 ay</option>
                                        <option value="0-1 yıl">0-1 yıl</option>
                                        <option value="1-2 yıl">1-2 yıl</option>
                                        <option value="2-4 yıl">2-4 yıl</option>
                                        <option value="4++">4++</option>
                                    </select>
                                    {watch('Experience') === "Seçiniz" && (<li className="errorStyle">Lütfen seçim yapınız</li>)}
                                </div>
                            </div>
                        }
                        {watch('Purpose') === "Müşteri" &&
                            <div>
                                <div>
                                    <label>Okuduğunuz Bölüm &nbsp;</label>
                                    <input
                                        name="Departmant"
                                        ref={register({
                                            required: true,

                                        })}
                                    />
                                    {errors.Departmant && (<li className="errorStyle">Lütfen bu alanı doldurunuz</li>)}
                                </div>
                                <div>
                                    <select name="Status"
                                        ref={register({
                                            required: true,
                                        })}>
                                        <option value="Seçiniz">Mezuniyet Durumunuzu Seçiniz</option>
                                        <option value="Mezun">Mezun</option>
                                        <option value="Öğrenci">Öğrenci</option>
                                    </select>
                                    {watch('Status') === "Seçiniz" && (<li className="errorStyle">Lütfen bir seçim yapınız</li>)}
                                </div>
                                {watch('Status') === "Mezun" &&
                                    <div>
                                        <div>
                                            <label>Mezuniyet Yılınız &nbsp;</label>
                                            <input
                                                name="Graduate"
                                                ref={register({
                                                    required: true,
                                                })}
                                            />
                                            {errors.Graduate && (<li className="errorStyle">Lütfen bu alanı doldurunuz</li>)}
                                        </div>
                                        <div>
                                            <label>Uzmanlık Alanınızdaki İş Deneyiminiz &nbsp;</label>
                                            <select name="Experience"
                                                ref={register({
                                                    required: true,
                                                })}>
                                                <option value="Seçiniz">Seçiniz</option>
                                                <option value="0-6 ay">0-6 ay</option>
                                                <option value="0-1 yıl">0-1 yıl</option>
                                                <option value="1-2 yıl">1-2 yıl</option>
                                                <option value="2-4 yıl">2-4 yıl</option>
                                                <option value="4+ yıl">4++</option>
                                            </select>
                                            {watch('Experience') === "Seçiniz" && (<li className="errorStyle">Lütfen seçim yapınız</li>)}
                                            
                                            {errors.Experience && (<li className="errorStyle">Lütfen bu alanı doldurunuz</li>)}
                                        </div>
                                    </div>}

                            </div>

                        }
                    </div>
                    <button className="submitButton">Gönder</button>

                </form>
            </div>
        </div>

    )

}

export default ContactUs;
