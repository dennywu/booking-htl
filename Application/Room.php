<?php
    class Room
    {
        public $TypeId;
        public $Name;
        public $Price;
        public $Available;
        
        function __construct($available = null,$price = null,  $name = null,$typeid=null) {
            $this->Name = $name;
            $this->Price = $price;
            $this->Available = $available;
            $this->TypeId = $typeid;
        }
    }

?>
