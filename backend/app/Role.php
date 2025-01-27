<?php

namespace App;

enum Role: string
{
    case OWNER = 'owner';
    case CONTRIBUTOR = 'contributor';
}
