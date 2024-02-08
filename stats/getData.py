import requests
import re
import json
from datetime import datetime

# URL do seu script PHP
php_script_url = "https://dhm.idle-pixel.com/hiscores/search.php?user="

# Desativa a verificação do certificado SSL
requests.packages.urllib3.disable_warnings(requests.packages.urllib3.exceptions.InsecureRequestWarning)

#Vars
users = ["xealleone","iwannaend","mvphoops","dubhz","rngcarried19","thejuice","stranger","simou989","llama","arca","felipewolf","devildavid","xirvisa","name","smitysukdick","david","snufflezhc","agrodon","codex234","reessagny","joenut915","guest269","guest950","mewtwo2387","cashmatty","simouhc","pizza1337","shirakyori","alorel","jeremy","dboy","seiken","fatal","omni","ppitek40","tema174","monkeball","panopticon","racer","jzispro","gordiehaggs","experyus72","sigolo","mrchord","raistul","guest1063","nostrum","yeeehawww","huejasstm","guest50","tigerboi123","wessamr","meisaweirdo","masterbaiter","rpg","guest978","russ","aki","hina0303","gamer517","gamesgames","joshua92","riddler 678","hcmchicken","nilly","prinnygod","guess23876","j4c0m6","scolpo","fortnitebest","guest19","mrozi","tomomiyaaa","baller","wolfb721","moomooioking","albe04","ralye","dogsss223","qzmp","guest1225","lunaheal","ulfberth","guest823","note","kingspidey","oobifai","monno","night172","koni5","cauby","rednaxela","lorinthar","souleater","camdamanxd","fishmaster","bobettepoop","great","atonycruz","dabingo","mrboomstronk","guest996","roxas404","kendo","guest83","stommpystomp","pajje86","arcturus","deadsushi","guest398","jollyjim","sm1","shienshokun","lol","lipleonaxila","almighty09","blade","jacksar","warlitz","asterixgooon","ezissmart","pmaguire13","fuckyouall","na 200","kenzhang","napstyy","rospiggen","guest1080","falcon0161","cibili","trueui","hornl","ragnorak333","superpako148","jedzhang","lolimaster","turrtleman","blue blood","socker","mikatamo","poker","lokkaya","edoxar","rednaxela1","extasnium","elenarch","ghostface","nathaniel","ms2020","papuk","supergiant01"]
current_date = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
timeNow = int(current_date.timestamp() * 1000)
existing_json_file_path = 'stats.json'
desired_items = {
    'redMushroom': 'redMushroom',
}
total_values = {item: 0 for item in desired_items}


# Lê o JSON existente
with open(existing_json_file_path, 'r') as existing_json_file:
    existing_data = json.load(existing_json_file)


for user in users:
    # Parâmetros da solicitação GET
    params = {'user': user}

    # Faz a solicitação HTTP
    response = requests.get(php_script_url, params=params, verify=False)

    if response.status_code == 200:
    
        # Obtém os dados da resposta
        data_html = response.text
    
        pattern = r'<script type="text/javascript">\s*data = "(.*?)";\s*username ='
        match = re.search(pattern, data_html)
        if match:
            data = match.group(1)
            items_and_values = data.split('~')
            # Seleciona apenas os itens desejados
            selected_items = {}
            for item, position in desired_items.items():
                try:
                    selected_items[item] = int(items_and_values[items_and_values.index(position) + 1])
                except ValueError:
                    # Trata o caso em que o item não foi encontrado
                    selected_items[item] = 0

            for item, value in selected_items.items():
                total_values[item] += value
        else:
        # Handle the case where the pattern is not found
            print(f"No match found for user: {user}")
            continue  # Skip to the next user

for item, value in total_values.items():
    # Obtém a lista existente para o item
    existing_list = existing_data.get(item, [])

    # Adiciona o novo valor com a data atual
    new_entry = {'date': timeNow, 'units': value}
    existing_list.append(new_entry)

    # Atualiza a entrada no dicionário existente
    existing_data[item] = existing_list

#Salvar o json
with open(existing_json_file_path, 'w') as json_file:
    json.dump(existing_data, json_file, indent=2)