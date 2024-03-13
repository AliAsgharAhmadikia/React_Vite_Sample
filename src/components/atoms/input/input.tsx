import React from 'react';

type InputProps = {
    /**
     * نوع متن ورودی را تعیین میکند
     */
    type:
    | "text"
    | "number"
    | "password"
    | "date"
    | "email";
    /**
     * محتوای placeholder داخل input را تعیین می کند
     */
    placeholder?: string;
    /**
     * مقدار وارد شده داخل input را برمی گرداند
     */
    value?: string;
    /**
     * خصوصیت id را مقدار دهی می کند
     */
    idValue?: string;
    /**
     * تعیین حداکثر تعداد کاراکتر ورودی
     */
    maxLength?: number;
    /**
     * موقع تغییر متن ورودی فراخوانی میشود
     */
    onChange?: (text: string) => void;
    /**
     * کلید فشرده شده را بررسی میکند
     */
    eventHandler?: () => void;
    /**
     * رویداد فشرده شدن کلید را مدیریت می کند
     */
    keyPressHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * برای دادن استایلهای سفارشی
     */
    className?: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
    /**
     * تست رنگ پس زمینه در رنگهای مختلف
     */
    backgroundColor?: string;
    _placeHolder?: string;
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
    /**
     * در صورتی که کاربر بخواهد سه رقم سه رقم جدا کننده داشته باشد
     * در این حالت فقط حروف عدد انگلیسی کاربر میتواند وارد کند
     */
    isThreeDigit?: boolean;
}
const InputText = ({ type, onFocus, onClick, isThreeDigit, placeholder, onBlur, value, idValue, onChange: _onChange, eventHandler, backgroundColor, maxLength, keyPressHandler, className: _className, _placeHolder, ...props }: InputProps) => {
    const onChange = (text: string) => {
        if (!_onChange) return;
        let t = text;
        if(isThreeDigit === true) {
            t = t.replace(/[^0-9]/g, '')
        }
        _onChange(t);
    }

    const onKeyDownHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
        ["ArrowUp", "ArrowDown", "e", "E", "-", "+", "_", "."].includes(e.key) && e.preventDefault()
    }

    return (
        <div className="flex w-full input-with-placeholder">
            <input
                type={type}
                id={idValue}
                name={idValue}
                placeholder={_placeHolder}
                required
                onClick={onClick}
                value={isThreeDigit ? Number(value).toLocaleString() : value}
                onBlur={onBlur}
                // onFocusCapture
                onFocus={onFocus}
                onWheel={event => event.currentTarget.blur()}
                onChange={(e) => onChange(e.target.value)}
                onKeyUp={(e) => eventHandler && (e.key === "Enter" && eventHandler())}
                onKeyDown={(e) => onKeyDownHandler(e)}
                maxLength={maxLength}
                className={`border-[1.5px] font-bold placeholder:font-medium rounded-md md:rounded-lg md:font-bold text-sm placeholder:text-sm md:text-xl md:placeholder:font-normal md:placeholder:text-base w-full placeholder:text-gray-800 border-slate-400 outline-none text-gray-600 focus:border-blue-500 focus:bg-blue-50 md:px-6 md:py-4 p-3 ${_className}`}
                style={{ backgroundColor }}
                {...props}
            />
            <label className='select-none mt-1 sm:-mt-2 md:-mt-2' htmlFor={idValue}>{placeholder}</label>
        </div>
    )
}
export default InputText;