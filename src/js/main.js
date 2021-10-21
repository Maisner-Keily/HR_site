import $ from '../local_modules/jquery/dist/jquery.min'

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log(`document ready`);
    AOS.init();

    $('#callback_form').submit(e => {
        e.preventDefault();
        const name = $('#callback_name').val();
        const channel = $('#callback_channel').val();
        const textarea = $('#callback_about').val();
        
        const text = `%3Cb%3EName%3C/b%3E%0A${name}%0A%3Cb%3EPreferred%20communication%20method%3C/b%3E%0A${channel}%0A%3Cb%3EMessage%3C/b%3E%0A${textarea}`;
        $.ajax({
            'url': 'https://api.telegram.org/bot2079108145:AAG22VqgLvORI8_wo8uVcOwHgIVo28hVH6Q/sendMessage',
            'method': 'post',
            'data-type': 'html',
            'data': {
                'chat_id': '379278124',
                'parse_mode': 'html',
                'text': text
            },

            'success': () => {
                console.log('ajax successed');
            }

        })
    })
})
