﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Fyvvyf
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Контроллер.
    /// </summary>
    // *** Start programmer edit section *** (Контроллер CustomAttributes)

    // *** End programmer edit section *** (Контроллер CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонтроллерE", new string[] {
            "Модель as \'Модель\'",
            "Настройки as \'Настройки\'",
            "Сенсоры as \'Сенсоры\'",
            "Сенсоры.Тип as \'Тип\'"}, Hidden=new string[] {
            "Сенсоры.Тип"})]
    [MasterViewDefineAttribute("КонтроллерE", "Сенсоры", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Тип")]
    public class Контроллер : ICSSoft.STORMNET.DataObject
    {
        
        private string fМодель;
        
        private string fНастройки;
        
        private IIS.Fyvvyf.Сенсоры fСенсоры;
        
        private IIS.Fyvvyf.Серверная fСерверная;
        
        // *** Start programmer edit section *** (Контроллер CustomMembers)

        // *** End programmer edit section *** (Контроллер CustomMembers)

        
        /// <summary>
        /// Модель.
        /// </summary>
        // *** Start programmer edit section *** (Контроллер.Модель CustomAttributes)

        // *** End programmer edit section *** (Контроллер.Модель CustomAttributes)
        [StrLen(255)]
        public virtual string Модель
        {
            get
            {
                // *** Start programmer edit section *** (Контроллер.Модель Get start)

                // *** End programmer edit section *** (Контроллер.Модель Get start)
                string result = this.fМодель;
                // *** Start programmer edit section *** (Контроллер.Модель Get end)

                // *** End programmer edit section *** (Контроллер.Модель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контроллер.Модель Set start)

                // *** End programmer edit section *** (Контроллер.Модель Set start)
                this.fМодель = value;
                // *** Start programmer edit section *** (Контроллер.Модель Set end)

                // *** End programmer edit section *** (Контроллер.Модель Set end)
            }
        }
        
        /// <summary>
        /// Настройки.
        /// </summary>
        // *** Start programmer edit section *** (Контроллер.Настройки CustomAttributes)

        // *** End programmer edit section *** (Контроллер.Настройки CustomAttributes)
        [StrLen(255)]
        public virtual string Настройки
        {
            get
            {
                // *** Start programmer edit section *** (Контроллер.Настройки Get start)

                // *** End programmer edit section *** (Контроллер.Настройки Get start)
                string result = this.fНастройки;
                // *** Start programmer edit section *** (Контроллер.Настройки Get end)

                // *** End programmer edit section *** (Контроллер.Настройки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контроллер.Настройки Set start)

                // *** End programmer edit section *** (Контроллер.Настройки Set start)
                this.fНастройки = value;
                // *** Start programmer edit section *** (Контроллер.Настройки Set end)

                // *** End programmer edit section *** (Контроллер.Настройки Set end)
            }
        }
        
        /// <summary>
        /// Контроллер.
        /// </summary>
        // *** Start programmer edit section *** (Контроллер.Сенсоры CustomAttributes)

        // *** End programmer edit section *** (Контроллер.Сенсоры CustomAttributes)
        [PropertyStorage(new string[] {
                "Сенсоры"})]
        [NotNull()]
        public virtual IIS.Fyvvyf.Сенсоры Сенсоры
        {
            get
            {
                // *** Start programmer edit section *** (Контроллер.Сенсоры Get start)

                // *** End programmer edit section *** (Контроллер.Сенсоры Get start)
                IIS.Fyvvyf.Сенсоры result = this.fСенсоры;
                // *** Start programmer edit section *** (Контроллер.Сенсоры Get end)

                // *** End programmer edit section *** (Контроллер.Сенсоры Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контроллер.Сенсоры Set start)

                // *** End programmer edit section *** (Контроллер.Сенсоры Set start)
                this.fСенсоры = value;
                // *** Start programmer edit section *** (Контроллер.Сенсоры Set end)

                // *** End programmer edit section *** (Контроллер.Сенсоры Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Fyvvyf.Серверная.
        /// </summary>
        // *** Start programmer edit section *** (Контроллер.Серверная CustomAttributes)

        // *** End programmer edit section *** (Контроллер.Серверная CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Серверная"})]
        public virtual IIS.Fyvvyf.Серверная Серверная
        {
            get
            {
                // *** Start programmer edit section *** (Контроллер.Серверная Get start)

                // *** End programmer edit section *** (Контроллер.Серверная Get start)
                IIS.Fyvvyf.Серверная result = this.fСерверная;
                // *** Start programmer edit section *** (Контроллер.Серверная Get end)

                // *** End programmer edit section *** (Контроллер.Серверная Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Контроллер.Серверная Set start)

                // *** End programmer edit section *** (Контроллер.Серверная Set start)
                this.fСерверная = value;
                // *** Start programmer edit section *** (Контроллер.Серверная Set end)

                // *** End programmer edit section *** (Контроллер.Серверная Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонтроллерE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонтроллерE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонтроллерE", typeof(IIS.Fyvvyf.Контроллер));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Контроллер.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfКонтроллер CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfКонтроллер CustomAttributes)
    public class DetailArrayOfКонтроллер : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Fyvvyf.DetailArrayOfКонтроллер members)

        // *** End programmer edit section *** (IIS.Fyvvyf.DetailArrayOfКонтроллер members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Контроллер by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Контроллер.
        /// </summary>
        public DetailArrayOfКонтроллер(IIS.Fyvvyf.Серверная fСерверная) : 
                base(typeof(Контроллер), ((ICSSoft.STORMNET.DataObject)(fСерверная)))
        {
        }
        
        public IIS.Fyvvyf.Контроллер this[int index]
        {
            get
            {
                return ((IIS.Fyvvyf.Контроллер)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Fyvvyf.Контроллер dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
